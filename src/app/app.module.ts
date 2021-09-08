import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';
// import { StudentController } from 'src/student/student.controller';
// import { StudentService } from 'src/student/student.service';
// import { StudentTeacherController } from 'src/teacher/student.controller';
// import { TeacherController } from 'src/teacher/teacher.controller';
// import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [StudentModule , TeacherModule],
  // controllers:[StudentController , TeacherController , StudentTeacherController],
  // providers : [StudentService , TeacherService]
})
export class AppModule {}
