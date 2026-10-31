package com.yourplan.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DataController {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${app.data-file-path:data.json}")
    private String dataFilePath;

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "UP");
        status.put("service", "YourPlan Java Spring Boot Backend");
        status.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(status);
    }

    @GetMapping("/data")
    public ResponseEntity<JsonNode> getData() {
        try {
            File file = new File(dataFilePath);
            // Nếu không tìm thấy ở thư mục hiện tại, thử tìm ở thư mục cha
            if (!file.exists()) {
                file = new File("../" + dataFilePath);
            }

            if (file.exists() && file.length() > 0) {
                JsonNode json = objectMapper.readTree(file);
                return ResponseEntity.ok(json);
            }

            // Trả về cấu trúc mặc định nếu chưa có file
            String defaultData = "{\"topics\":[],\"notes\":[],\"mindmapNodes\":[]}";
            return ResponseEntity.ok(objectMapper.readTree(defaultData));
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/data")
    public ResponseEntity<Map<String, Object>> saveData(@RequestBody JsonNode payload) {
        Map<String, Object> response = new HashMap<>();
        try {
            File file = new File(dataFilePath);
            if (!file.exists() && new File("../" + dataFilePath).exists()) {
                file = new File("../" + dataFilePath);
            }

            objectMapper.writerWithDefaultPrettyPrinter().writeValue(file, payload);

            response.put("success", true);
            response.put("message", "Data saved successfully by Java Backend");
            response.put("updatedAt", System.currentTimeMillis());
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }
}
