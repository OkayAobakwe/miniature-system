import { Controller, Get, Param } from "@nestjs/common"

@Controller("cats")
export class CatsController {

  @Get()
  findAll(): string {
    return "This action returns all cats"
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id)
    return `This action will return a #${params.id} cat`
  }
}