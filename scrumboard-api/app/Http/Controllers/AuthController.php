<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // $user->name = 'Erwin Olie';
        // $user->email = 'erwinolie@gmail.com';
        // $user->password = bcrypt('wachtwoord123');
        // $user->save();

        // return $user;
    }

    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];
        
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Credentials not found'], 401);
        }

        $user = $request->user();
        
        $tokenResult = $user->createToken('Personal Access Token');
        $tokenResult->token->save();

        return response()->json([
            'token' => $tokenResult->accessToken,
            'type' => 'Bearer'
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
