package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {

	app := fiber.New()

	app.Get("/disupload", func(c *fiber.Ctx) error {
		fmt.Println("disupload 실행")
		return c.SendString("disupload 실행")
	})

	app.Get("/disdownload", func(c *fiber.Ctx) error {
		fmt.Println("disdownload 실행")
		return c.SendString("disdownload 실행")
	})

	app.Get("/disrm", func(c *fiber.Ctx) error {
		fmt.Println("disrm 실행 ")
		return c.SendString("disdownload 실행")
	})

	log.Fatal(app.Listen(":3000"))
}
