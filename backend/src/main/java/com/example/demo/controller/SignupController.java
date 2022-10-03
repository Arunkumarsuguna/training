package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Signup;
import com.example.demo.service.SignupService;

@RestController
public class SignupController {
	
	@Autowired
	private SignupService service;
	
	@PostMapping("/addUser")
	@CrossOrigin(origins = "http://localhost:3000")
	public Signup addUser(@RequestBody Signup signup) {			
		return service.saveSignup(signup);
	}
	
	/*@GetMapping("/login/{email}/{password}")
	@CrossOrigin(origins = "http://localhost:3000")
	public String loginCheck(@PathVariable String email, @PathVariable String password) {
		return service.checkLogin(email,password);
	}*/
}
