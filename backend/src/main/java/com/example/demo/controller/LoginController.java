package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Login;

import com.example.demo.service.LoginService;



@RestController
public class LoginController {

	@Autowired
	private LoginService loginservice;
	
	@PostMapping("/addLogin")
	public String addLogin(Login login) {
		loginservice.saveLogin(login);
		return "yes";
	}
	
	@GetMapping("/login/{email}/{password}")
	@CrossOrigin(origins = "http://localhost:3000")
	public String loginCheck(@PathVariable String email, @PathVariable String password) {
		return loginservice.checkLogin(email,password);
	}
}
