<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PersonalInfoResource\Pages;
use App\Filament\Resources\PersonalInfoResource\RelationManagers;
use App\Models\PersonalInfo;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PersonalInfoResource extends Resource
{
    protected static ?string $model = PersonalInfo::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';

    protected static ?string $navigationGroup = 'İçerik';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('İsim')
                    ->required(),
                Forms\Components\TextInput::make('title_font_size')
                    ->label('Başlık Yazı Boyutu')
                    ->numeric()
                    ->placeholder('Otomatik')
                    ->helperText('Boş bırakırsanız harf sayısına göre otomatik ayarlanır. Örn: NATHAN=480, daha uzun isimler=daha küçük değer'),
                Forms\Components\TextInput::make('title')
                    ->label('Başlık'),
                Forms\Components\TextInput::make('subtitle')
                    ->label('Alt Başlık'),
                Forms\Components\Textarea::make('about_title')
                    ->label('Hakkında Başlığı')
                    ->rows(3)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('bio1')
                    ->label('Biyografi 1')
                    ->rows(4)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('bio2')
                    ->label('Biyografi 2')
                    ->rows(4)
                    ->columnSpanFull(),
                Forms\Components\FileUpload::make('profile_image')
                    ->label('Profil Görseli')
                    ->image()
                    ->directory('images/profile')
                    ->disk('public')
                    ->visibility('public')
                    ->imageEditor(),
                Forms\Components\Toggle::make('available_for_work')
                    ->label('İşe Açık'),
                Forms\Components\Repeater::make('stats')
                    ->label('İstatistikler')
                    ->schema([
                        Forms\Components\TextInput::make('label')
                            ->label('Etiket'),
                        Forms\Components\TextInput::make('value')
                            ->label('Değer')
                            ->numeric(),
                    ])
                    ->columns(2)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\IconColumn::make('available_for_work')
                    ->boolean(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
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

    // NOTE: This is a single-record resource. Ideally 'index' should route to a custom ManagePersonalInfo page.
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPersonalInfos::route('/'),
            'create' => Pages\CreatePersonalInfo::route('/create'),
            'edit' => Pages\EditPersonalInfo::route('/{record}/edit'),
        ];
    }
}
