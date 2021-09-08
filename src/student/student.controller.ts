import {  Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/roles.guard';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {

    constructor(private studentService: StudentService){}

    @Get()
    @UseGuards(RolesGuard)
    getStudents() : FindStudentResponseDto[]{        
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId',new ParseUUIDPipe()) studentId: string):FindStudentResponseDto
    {      // @Param params : {studentId : string}
        return this.studentService.getStudentById(studentId); 
    }

    @Post()
    createStudent(
        @Body() body : CreateStudentDto
    ): StudentResponseDto{
        return this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    updateStudentById(
        @Param('studentId' , new ParseUUIDPipe()) studentId: string,
        @Body() body : UpdateStudentDto 
    ):StudentResponseDto{
        return this.studentService.updateStudentById(body , studentId)
    }
}
