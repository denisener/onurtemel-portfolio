<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';
    protected static ?string $navigationGroup = 'İçerik';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Temel Bilgiler')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Başlık')
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('URL Slug')
                            ->required()
                            ->unique(ignoreRecord: true),
                        Forms\Components\FileUpload::make('cover_image')
                            ->label('Kapak Görseli')
                            ->image()
                            ->directory('images/works')
                            ->disk('public')
                            ->visibility('public')
                            ->imageEditor()
                            ->required(),
                        Forms\Components\TextInput::make('category')
                            ->label('Kategori'),
                        Forms\Components\TextInput::make('year')
                            ->label('Yıl'),
                        Forms\Components\Select::make('project_type')
                            ->label('Proje Tipi')
                            ->options([
                                'photo' => '📷 Fotoğraf',
                                'video' => '🎬 Video',
                                'mixed' => '📷🎬 Karışık',
                            ])
                            ->required(),
                        Forms\Components\Toggle::make('featured')
                            ->label('Öne Çıkan'),
                        Forms\Components\Toggle::make('is_active')
                            ->label('Aktif')
                            ->default(true),
                        Forms\Components\TextInput::make('sort_order')
                            ->label('Sıralama')
                            ->numeric()
                            ->default(0),
                    ])->columns(2),

                Forms\Components\Section::make('Detaylar')
                    ->schema([
                        Forms\Components\Textarea::make('overview')
                            ->label('Özet')
                            ->rows(3)
                            ->columnSpanFull(),
                        Forms\Components\Repeater::make('objectives')
                            ->label('Hedefler')
                            ->simple(
                                Forms\Components\TextInput::make('objective')
                                    ->required(),
                            )
                            ->columnSpanFull(),
                    ]),

                Forms\Components\Section::make('Galeri (Fotoğraflar)')
                    ->schema([
                        Forms\Components\Repeater::make('gallery')
                            ->label('Görseller')
                            ->schema([
                                Forms\Components\FileUpload::make('imagePath')
                                    ->label('Görsel')
                                    ->image()
                                    ->directory('images/gallery')
                                    ->disk('public')
                                    ->visibility('public')
                                    ->required(),
                                Forms\Components\TextInput::make('alt')
                                    ->label('Alt Text'),
                                Forms\Components\TextInput::make('caption')
                                    ->label('Açıklama'),
                            ])
                            ->columns(3)
                            ->columnSpanFull(),
                    ])
                    ->collapsed(),

                Forms\Components\Section::make('Videolar')
                    ->schema([
                        Forms\Components\Repeater::make('videos')
                            ->label('Video Listesi')
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->label('Video Başlığı')
                                    ->required(),
                                Forms\Components\TextInput::make('youtubeUrl')
                                    ->label('YouTube URL')
                                    ->url()
                                    ->required(),
                                Forms\Components\FileUpload::make('thumbnailPath')
                                    ->label('Thumbnail')
                                    ->image()
                                    ->directory('images/thumbnails')
                                    ->disk('public')
                                    ->visibility('public'),
                                Forms\Components\TextInput::make('duration')
                                    ->label('Süre')
                                    ->helperText('Örn: 2:30'),
                            ])
                            ->columns(2)
                            ->columnSpanFull(),
                    ])
                    ->collapsed(),

                Forms\Components\Section::make('Proje Referansı')
                    ->schema([
                        Forms\Components\TextInput::make('testimonial.quote')
                            ->label('Alıntı'),
                        Forms\Components\TextInput::make('testimonial.name')
                            ->label('İsim'),
                        Forms\Components\TextInput::make('testimonial.role')
                            ->label('Ünvan'),
                    ])
                    ->columns(3)
                    ->collapsed(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Başlık')
                    ->searchable(),
                Tables\Columns\TextColumn::make('project_type')
                    ->label('Tip')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'photo' => 'success',
                        'video' => 'warning',
                        'mixed' => 'info',
                    }),
                Tables\Columns\TextColumn::make('category')
                    ->label('Kategori')
                    ->searchable(),
                Tables\Columns\TextColumn::make('year')
                    ->label('Yıl')
                    ->sortable(),
                Tables\Columns\IconColumn::make('featured')
                    ->label('Öne Çıkan')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Sıra')
                    ->sortable(),
            ])
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
