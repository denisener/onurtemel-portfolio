<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSettingResource\Pages;
use App\Filament\Resources\SiteSettingResource\RelationManagers;
use App\Models\SiteSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SiteSettingResource extends Resource
{
    protected static ?string $model = SiteSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog';

    protected static ?string $navigationGroup = 'Ayarlar';

    protected static ?int $navigationSort = 9;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Genel')
                    ->schema([
                        Forms\Components\TextInput::make('site_title')
                            ->label('Site Başlığı'),
                        Forms\Components\TextInput::make('site_description')
                            ->label('Site Açıklaması'),
                        Forms\Components\TextInput::make('footer_text')
                            ->label('Footer Yazısı'),
                    ]),
                Forms\Components\Section::make('Menü')
                    ->schema([
                        Forms\Components\Repeater::make('menus')
                            ->label('Menü Linkleri')
                            ->schema([
                                Forms\Components\TextInput::make('text')
                                    ->label('Metin'),
                                Forms\Components\TextInput::make('href')
                                    ->label('Link'),
                            ])
                            ->columns(2)
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make('Sosyal Medya')
                    ->schema([
                        Forms\Components\Repeater::make('social_links')
                            ->label('Sosyal Medya')
                            ->schema([
                                Forms\Components\TextInput::make('platform')
                                    ->label('Platform'),
                                Forms\Components\TextInput::make('url')
                                    ->label('URL'),
                            ])
                            ->columns(2)
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make('Kayan Yazılar')
                    ->schema([
                        Forms\Components\Repeater::make('marquee_texts')
                            ->label('Marquee Yazıları')
                            ->simple(
                                Forms\Components\TextInput::make('text'),
                            )
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make('Görünürlük Ayarları')
                    ->description('Önyüzde hangi bölümlerin gösterileceğini seçin')
                    ->schema([
                        Forms\Components\Toggle::make('show_stats')
                            ->label('İstatistikleri Göster')
                            ->default(true)
                            ->helperText('Ana sayfadaki istatistik sayaçları'),
                        Forms\Components\Toggle::make('show_blog')
                            ->label('Blog Yazılarını Göster')
                            ->default(true)
                            ->helperText('Blog bölümü ve menü linki'),
                        Forms\Components\Toggle::make('show_testimonials')
                            ->label('Referansları Göster')
                            ->default(true)
                            ->helperText('Müşteri yorumları bölümü'),
                        Forms\Components\Toggle::make('show_marquee')
                            ->label('Kayan Yazıları Göster')
                            ->default(true)
                            ->helperText('Ana sayfadaki kayan yazı bandı'),
                    ])
                    ->columns(2),
                Forms\Components\Section::make('İletişim Formu')
                    ->schema([
                        Forms\Components\TextInput::make('contact_email')
                            ->label('İletişim E-postası')
                            ->email()
                            ->helperText('İletişim formundan gelen mesajların gönderileceği e-posta adresi'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('site_title'),
                Tables\Columns\TextColumn::make('site_description'),
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSiteSettings::route('/'),
            'create' => Pages\CreateSiteSetting::route('/create'),
            'edit' => Pages\EditSiteSetting::route('/{record}/edit'),
        ];
    }
}
