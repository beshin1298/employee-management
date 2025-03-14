package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import net.javaguides.ems.dto.EmployeeDTO;

import net.javaguides.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDTO> CreateEmployee(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO saveEmployee = employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(saveEmployee, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> GetEmployee(@PathVariable("id") Long employeeId){
        EmployeeDTO employeeDTO = employeeService.getEmployee(employeeId);
        return ResponseEntity.ok(employeeDTO);
    }
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> GetAllEmployee(){
        return ResponseEntity.ok(employeeService.getAllEmployee());
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> UpdateEmployee(@PathVariable("id") Long employeeId,
                                                          @RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO saveEmployee = employeeService.updateEmployee(employeeId,employeeDTO);
        return ResponseEntity.ok(saveEmployee);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> DeleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Deleted employee successfully!");
    }
}
