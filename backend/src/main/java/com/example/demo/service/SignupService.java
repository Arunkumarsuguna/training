package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.entity.Signup;
import com.example.demo.repository.SignupRepository;

@Service
public class SignupService {
	
	@Autowired 
	private SignupRepository signuprepo;
	
	@Autowired
	Login login;
	
	@Autowired
	private LoginService loginservice;
	
	public Signup saveSignup(Signup signup){		
		Signup s = signuprepo.save(signup);
		login.setId(s.getId());
		login.setUsername(s.getEmail());
		login.setPassword(s.getPassword());
		login.setRole(s.getUser());		
		loginservice.saveLogin(login);		
		return s;
	}	
	
}
