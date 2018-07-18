<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        $details = [
            'name' => 'hello world',
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ];

        $user = new User($details);
        $user->save();
        
        return $user->serializeToken();
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

        return $user->serializeToken();
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
