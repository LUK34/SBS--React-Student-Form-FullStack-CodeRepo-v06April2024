package kw.kng.stdt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kw.kng.stdt.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>
{

}
