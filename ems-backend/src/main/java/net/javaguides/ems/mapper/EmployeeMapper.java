package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.entity.Employee;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface EmployeeMapper {
    EmployeeDTO toDTO(Employee employee);
    Employee toEntity(EmployeeDTO employeeDTO);
    List<EmployeeDTO> toDTOList(List<Employee> employees);
    List<Employee> toEntityList(List<EmployeeDTO> employeeDTOs);
}
