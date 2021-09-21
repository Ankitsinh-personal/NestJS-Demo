import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from 'src/companies/companies.module';
import { StudentModule } from 'src/controller/student/student.module';
import { TeacherModule } from 'src/controller/teacher/teacher.module';
import { config } from 'src/orm.config';
// import { StudentController } from 'src/student/student.controller';
// import { StudentService } from 'src/student/student.service';
// import { StudentTeacherController } from 'src/teacher/student.controller';
// import { TeacherController } from 'src/teacher/teacher.controller';
// import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [StudentModule , TeacherModule ,CompaniesModule, TypeOrmModule.forRoot(config)],
  // controllers:[StudentController , TeacherController , StudentTeacherController],
  // providers : [StudentService , TeacherService]
})
export class AppModule {}
