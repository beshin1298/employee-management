package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.entity.Employee;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface EmployeeMapper {
    EmployeeDTO toDTO(Employee employee);
    Employee toEntity(EmployeeDTO employeeDTO);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Employee DtoToEntity(@MappingTarget Employee employee, EmployeeDTO employeeDTO);
    List<EmployeeDTO> toDTOList(List<Employee> employees);
    List<Employee> toEntityList(List<EmployeeDTO> employeeDTOs);
}
