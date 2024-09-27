/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { GatePassUpdateManyWithoutStudentsInput } from "./GatePassUpdateManyWithoutStudentsInput";

@InputType()
class StudentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => GatePassUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => GatePassUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => GatePassUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  gatePasses?: GatePassUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  registrationNumber?: string | null;
}

export { StudentUpdateInput as StudentUpdateInput };
