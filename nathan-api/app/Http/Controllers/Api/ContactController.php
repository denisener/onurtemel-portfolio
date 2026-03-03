<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'message' => 'required|string|max:5000',
        ]);

        $settings = SiteSetting::first();
        $contactEmail = $settings?->contact_email;

        if (!$contactEmail) {
            Log::warning('İletişim formu gönderildi ancak contact_email ayarlanmamış.', $validated);
            return response()->json(['message' => 'Mesajınız alındı.'], 200);
        }

        try {
            Mail::raw(
                "İsim: {$validated['name']}\n" .
                "E-posta: {$validated['email']}\n" .
                "Telefon: " . ($validated['phone'] ?? '-') . "\n\n" .
                "Mesaj:\n{$validated['message']}",
                function ($mail) use ($contactEmail, $validated) {
                    $mail->to($contactEmail)
                        ->replyTo($validated['email'], $validated['name'])
                        ->subject("İletişim Formu: {$validated['name']}");
                }
            );
        } catch (\Exception $e) {
            Log::error('İletişim formu e-posta gönderim hatası: ' . $e->getMessage(), $validated);
        }

        return response()->json(['message' => 'Mesajınız başarıyla gönderildi.'], 200);
    }
}
