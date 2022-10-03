package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Course;
import com.example.demo.repository.CourseRepo;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepo courserepo;
	
	public Course saveCourse(Course course) {	
		return courserepo.save(course);
	}
	
	public List<Course> getCourses(){
		return courserepo.findAll();
	}	
	
	public String deleteCourse(int id) {
		courserepo.deleteById(id);
		return "yes";
	}
	

}
