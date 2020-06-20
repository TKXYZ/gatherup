package com.gatherup.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GatherUpApplication {

	public static void main(String[] args) {

		SpringApplication.run(GatherUpApplication.class, args);

		System.out.println("Hello, GatherUp!");

	}

}
