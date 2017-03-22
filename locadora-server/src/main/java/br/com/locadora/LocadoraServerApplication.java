package br.com.locadora;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
@EnableAutoConfiguration
public class LocadoraServerApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(LocadoraServerApplication.class, args);
	}
}
