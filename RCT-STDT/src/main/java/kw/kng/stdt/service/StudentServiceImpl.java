package kw.kng.stdt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kw.kng.stdt.model.Student;
import kw.kng.stdt.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService 
{
	 	@Autowired
	    private StudentRepository studentRepository;

	    @Override
	    public Student saveStudent(Student student)
	    {
	        return studentRepository.save(student);
	    }

	    @Override
	    public List<Student> getAllStudents()
	    {
	        return studentRepository.findAll();
	    }

}
