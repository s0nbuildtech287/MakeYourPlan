package com.yourplan.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        String username = request.getOrDefault("username", "").trim().toLowerCase();
        String password = request.getOrDefault("password", "").trim();

        Map<String, Object> response = new HashMap<>();

        // 1. Kiểm tra tài khoản Admin
        boolean isAdmin = username.equals("xu4ns0n") && password.equals("Sondeptrai123@k");

        // 2. Kiểm tra các tài khoản Demo 1-Click (user1 -> user5, mk: 123456)
        boolean isDemoUser = (username.matches("^user[1-5]$") && password.equals("123456"));

        if (isAdmin || isDemoUser) {
            response.put("success", true);
            response.put("username", username);
            response.put("role", isAdmin ? "ADMIN" : "DEMO_USER");
            response.put("token", "yourplan_token_" + username + "_" + System.currentTimeMillis());
            response.put("message", "Đăng nhập thành công!");
            return ResponseEntity.ok(response);
        }

        response.put("success", false);
        response.put("message", "Tên đăng nhập hoặc mật khẩu không chính xác.");
        return ResponseEntity.status(401).body(response);
    }
}

