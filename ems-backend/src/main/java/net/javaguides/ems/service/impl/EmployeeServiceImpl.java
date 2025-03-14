package net.javaguides.ems.service.impl;

import lombok.RequiredArgsConstructor;
import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.entity.Employee;
import net.javaguides.ems.mapper.EmployeeMapper;
import net.javaguides.ems.repository.EmployeeRepository;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final EmployeeMapper employeeMapper;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = employeeMapper.toEntity(employeeDTO);
        Employee employeeSave = employeeRepository.save(employee);
        return employeeMapper.toDTO(employeeSave);
    }

    @Override
    public EmployeeDTO getEmployee(Long employeeId) {
        Employee employee =  isEmployeeExist(employeeId);
        return employeeMapper.toDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDTO> employeeDTOS = employeeMapper.toDTOList(employees);
        return employeeDTOS;
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO employeeDTO) {
        Employee employee =  isEmployeeExist(employeeId);
        Employee employeeSave = employeeRepository.save(employeeMapper.DtoToEntity(employee,employeeDTO));
        return employeeMapper.toDTO(employeeSave);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee =  isEmployeeExist(employeeId);
        employeeRepository.delete(employee);
    }

    private Employee isEmployeeExist(Long employeeId){
        Employee employee =  employeeRepository.findById(employeeId).orElseThrow(()-> new ResolutionException("Not found EmployeeId: " +employeeId));
        return employee;
    }
}
