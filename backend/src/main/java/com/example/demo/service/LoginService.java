package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository loginrepo;
	
	public Login saveLogin(Login login) {
		return loginrepo.save(login);	
	}

	public String checkLogin(String email, String password) {
		Login ss = loginrepo.findByUsernameAndPassword(email,password);
		if(ss!=null) {
			if(ss.getUsername().equalsIgnoreCase(email) && ss.getPassword().equals(password)) {
				return "true:"+ss.getRole();
			}
			else {
				return "false";
			}
		}
		else {
			return "false";
		}
	}

	
}
