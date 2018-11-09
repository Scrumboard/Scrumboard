<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function generateToken()
    {
        $tokenResult = $this->createToken('Personal Access Token');
        $tokenResult->token->save();

        return [
            'token' => $tokenResult->accessToken,
            'type' => 'Bearer'
        ];
    }
}
