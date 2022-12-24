package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	app.Get("/", indexRouteHandler)
	log.Fatal(app.Listen(":8000"))
}

// handlers
func indexRouteHandler(ctx *fiber.Ctx) error {
	return ctx.SendString("hello world!")
}
