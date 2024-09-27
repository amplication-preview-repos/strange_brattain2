/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { StudentService } from "../student.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StudentCreateInput } from "./StudentCreateInput";
import { Student } from "./Student";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentUpdateInput } from "./StudentUpdateInput";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { AttendanceWhereUniqueInput } from "../../attendance/base/AttendanceWhereUniqueInput";
import { GatePassFindManyArgs } from "../../gatePass/base/GatePassFindManyArgs";
import { GatePass } from "../../gatePass/base/GatePass";
import { GatePassWhereUniqueInput } from "../../gatePass/base/GatePassWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StudentControllerBase {
  constructor(
    protected readonly service: StudentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Student })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createStudent(
    @common.Body() data: StudentCreateInput
  ): Promise<Student> {
    return await this.service.createStudent({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        registrationNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Student] })
  @ApiNestedQuery(StudentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async students(@common.Req() request: Request): Promise<Student[]> {
    const args = plainToClass(StudentFindManyArgs, request.query);
    return this.service.students({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        registrationNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async student(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    const result = await this.service.student({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        registrationNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateStudent(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() data: StudentUpdateInput
  ): Promise<Student | null> {
    try {
      return await this.service.updateStudent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          registrationNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStudent(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    try {
      return await this.service.deleteStudent({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          registrationNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/attendances")
  @ApiNestedQuery(AttendanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async findAttendances(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Attendance[]> {
    const query = plainToClass(AttendanceFindManyArgs, request.query);
    const results = await this.service.findAttendances(params.id, {
      ...query,
      select: {
        createdAt: true,
        entryTime: true,
        exitTime: true,
        id: true,
        status: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async connectAttendances(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        connect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateAttendances(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        set: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async disconnectAttendances(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        disconnect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/gatePasses")
  @ApiNestedQuery(GatePassFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GatePass",
    action: "read",
    possession: "any",
  })
  async findGatePasses(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<GatePass[]> {
    const query = plainToClass(GatePassFindManyArgs, request.query);
    const results = await this.service.findGatePasses(params.id, {
      ...query,
      select: {
        authority: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        reason: true,
        requestDate: true,
        status: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/gatePasses")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async connectGatePasses(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: GatePassWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gatePasses: {
        connect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/gatePasses")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateGatePasses(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: GatePassWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gatePasses: {
        set: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/gatePasses")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async disconnectGatePasses(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: GatePassWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gatePasses: {
        disconnect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
