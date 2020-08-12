function 找最近的食物 () {
    dogs = sprites.allOfKind(SpriteKind.Player)
    foods = sprites.allOfKind(SpriteKind.Food)
    for (let dogSprite of dogs) {
        nearestFoodDistance = 999
        for (let foodSprite of foods) {
            if (nearestFoodDistance > cubicbird.distance(dogSprite, foodSprite)) {
                nearestFoodDistance = cubicbird.distance(dogSprite, foodSprite)
                nearestFoodSprite = foodSprite
            }
        }
        dogSprite.follow(nearestFoodSprite)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    找最近的食物()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    dog.say("Yummy!", 1000)
    foodSprite2.destroy()
})
let nearestFoodSprite: Sprite = null
let foods: Sprite[] = []
let dogs: Sprite[] = []
let dog: Sprite = null
let foodSprite2: Sprite = null
let nearestFoodDistance = 0
nearestFoodDistance = 999
for (let index = 0; index < 5; index++) {
    foodSprite2 = sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.Food)
    foodSprite2.setPosition(120, randint(10, 110))
}
for (let index = 0; index < 3; index++) {
    dog = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    dog.setPosition(20, randint(20, 100))
}
