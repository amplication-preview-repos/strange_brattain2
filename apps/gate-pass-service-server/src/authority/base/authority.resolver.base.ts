/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Authority } from "./Authority";
import { AuthorityCountArgs } from "./AuthorityCountArgs";
import { AuthorityFindManyArgs } from "./AuthorityFindManyArgs";
import { AuthorityFindUniqueArgs } from "./AuthorityFindUniqueArgs";
import { CreateAuthorityArgs } from "./CreateAuthorityArgs";
import { UpdateAuthorityArgs } from "./UpdateAuthorityArgs";
import { DeleteAuthorityArgs } from "./DeleteAuthorityArgs";
import { GatePassFindManyArgs } from "../../gatePass/base/GatePassFindManyArgs";
import { GatePass } from "../../gatePass/base/GatePass";
import { AuthorityService } from "../authority.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Authority)
export class AuthorityResolverBase {
  constructor(
    protected readonly service: AuthorityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Authority",
    action: "read",
    possession: "any",
  })
  async _authoritiesMeta(
    @graphql.Args() args: AuthorityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Authority])
  @nestAccessControl.UseRoles({
    resource: "Authority",
    action: "read",
    possession: "any",
  })
  async authorities(
    @graphql.Args() args: AuthorityFindManyArgs
  ): Promise<Authority[]> {
    return this.service.authorities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Authority, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Authority",
    action: "read",
    possession: "own",
  })
  async authority(
    @graphql.Args() args: AuthorityFindUniqueArgs
  ): Promise<Authority | null> {
    const result = await this.service.authority(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Authority)
  @nestAccessControl.UseRoles({
    resource: "Authority",
    action: "create",
    possession: "any",
  })
  async createAuthority(
    @graphql.Args() args: CreateAuthorityArgs
  ): Promise<Authority> {
    return await this.service.createAuthority({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Authority)
  @nestAccessControl.UseRoles({
    resource: "Authority",
    action: "update",
    possession: "any",
  })
  async updateAuthority(
    @graphql.Args() args: UpdateAuthorityArgs
  ): Promise<Authority | null> {
    try {
      return await this.service.updateAuthority({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Authority)
  @nestAccessControl.UseRoles({
    resource: "Authority",
    action: "delete",
    possession: "any",
  })
  async deleteAuthority(
    @graphql.Args() args: DeleteAuthorityArgs
  ): Promise<Authority | null> {
    try {
      return await this.service.deleteAuthority(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [GatePass], { name: "gatePasses" })
  @nestAccessControl.UseRoles({
    resource: "GatePass",
    action: "read",
    possession: "any",
  })
  async findGatePasses(
    @graphql.Parent() parent: Authority,
    @graphql.Args() args: GatePassFindManyArgs
  ): Promise<GatePass[]> {
    const results = await this.service.findGatePasses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}