package com.yourplan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class YourPlanApplication {

    public static void main(String[] args) {
        SpringApplication.run(YourPlanApplication.class, args);
        System.out.println("=================================================");
        System.out.println("🚀 YourPlan Java Backend is running on port 8080!");
        System.out.println("📖 Swagger API Docs: http://localhost:8080/swagger-ui.html");
        System.out.println("=================================================");
    }
}

