import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import {  StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';
// import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    
    constructor(private studentService : StudentService){}
    @Get()
    getStudentsByTeacherId(@Param('teacherId' , new ParseUUIDPipe()) teacherId: string):StudentResponseDto[]{

        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId' , new ParseUUIDPipe()) teacherId: string,
        @Param('studentId' , new ParseUUIDPipe()) studentId: string
    ):StudentResponseDto{
        return this.studentService.updateStudentTeacher(teacherId , studentId)
    }   

}
