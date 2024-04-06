package kw.kng.stdt.service;

import java.util.List;


import kw.kng.stdt.model.Student;

public interface StudentService
{
	 public Student saveStudent(Student student);
	 public List<Student> getAllStudents();

}
