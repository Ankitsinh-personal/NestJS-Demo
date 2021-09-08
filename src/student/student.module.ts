import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/common/middleware/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports : [StudentService]
})
export class StudentModule implements NestModule{ 
    configure(consumer:MiddlewareConsumer){     //use define middleware to routes
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path:'students/:studentId',
            method:RequestMethod.GET
        });

        consumer.apply(ValidStudentMiddleware).forRoutes({
            path:'students/:studentId',
            method:RequestMethod.PUT
        });
    }
}
