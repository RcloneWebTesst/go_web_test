package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	// CORS 설정 (React와 통신 허용)
	app.Use(cors.New())

	// React에서 호출할 API
	app.Post("/api/disupload", func(c *fiber.Ctx) error {
		fmt.Println("disupload 실행")
		return c.JSON(fiber.Map{"message": "disupload 실행 완료!"})
	})

	log.Fatal(app.Listen(":5001")) // React와 충돌 방지 위해 5000번 포트 사용
}
