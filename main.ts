namespace SpriteKind {
    export const furniture = SpriteKind.create()
    export const item = SpriteKind.create()
    export const Renew = SpriteKind.create()
}
function haggling (mySprite: Sprite, customer: Sprite) {
    interact = true
    numInt = 0
    while (interact) {
        itemPrice = game.askForNumber("How much do you want to sell this item for?")
        if (Math.percentChance(15)) {
            customer.sayText("sold!")
            game.showLongText("You successfully sold the item for $" + itemPrice, DialogLayout.Bottom)
            customer.destroy()
            info.changeScoreBy(itemPrice)
            interact = false
            sold = true
        } else if (Math.percentChance(15) || numInt > 5) {
            interact = false
            customer.sayText("I'm not paying that!")
            pause(500)
            customer.destroy()
        } else {
            customerPrice = randint(0, itemPrice)
            customer.sayText("I'll give you $" + customerPrice)
            pause(2000)
            choice = game.askForString("Would you like to continue sale?")
            if (choice != "yes") {
                interact = false
            }
        }
        numInt += 1
    }
    return sold
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        ..................................................................
        .....888..888........................................888..888.....
        ...68777887778.66666.........6666666.........666666.87778877786...
        ..68777777777786999666.....66699999666.....666999968777777777786..
        ..687887777887899999966...6699999999966...6699999998788777788786..
        ..66788777788769999999666669999999999966666999999996788777788766..
        ..67777777777776999999999999999999999999999999999967777777777776..
        ..633777777773366999999999999999999999999999999996633777777773366.
        .6733776666773376999999999999999999999999999999996733776666773376.
        .677776dddd67777699999999999999999999999999999999677776dddd677776.
        .6d666dddddd666d6999999999999999999999999999999996d666dddddd666d6.
        .6dddddddddddddd6999999999999999999999999999999996dddddddddddddd6.
        ..6dddddddddddd699999999999999999999999999999999996dddddddddddd6..
        ...666666666666999999999999999999999999999999999999666666666666...
        ...699999999999999999999999999999999999999999999999999999999996...
        ..66999999999999999999999999999999999999999999999999999999999966..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999966..
        ..6699999999999999999999999999999999999999999999999999999999996...
        ...699999999999999999999999999999999999999999999999999999999966...
        ...66999999999999999999999999999999999999999999999999999999966....
        ....669999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....699999999999999999999999999999999999999999999999999999966....
        ....66999999999999999999999999999999999999999999999999999999966...
        ...669999999999999999999999999999999999999999999999999999999996...
        ...6999999999999999999999999999999999999999999999999999999999966..
        ..66999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999966..
        ..6699999999999999999999999999999999999999999999999999999999996...
        ...699999999999999999999999999999999999999999999999999999999966...
        ...66999999999999999999999999999999999999999999999999999999966....
        ....669999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....69999999999999999999999999999999999999999999999999999996.....
        .....699999999999999999999999999999999999999999999999999999966....
        ....66999999999999999999999999999999999999999999999999999999966...
        ...669999999999999999999999999999999999999999999999999999999996...
        ...6999999999999999999999999999999999999999999999999999999999966..
        ..66999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..69999999999999999999999999999999999999999999999999999999999996..
        ..66999999999999999999999999999999999999999999999999999999999966..
        ...699999999999999999999999999999999999999999999999999999999996...
        ...668889988899999999999999999999999999999999999999998889988866...
        ....8777887778999999999999999999999999999999999999998777887778....
        ...877777777778999999999999999999999999999999999999877777777778...
        ...878877778878999999999999999999999999999999999999878877778878...
        ...678877778876999999999999999999999999999999999999678877778876...
        ..67777777777776999999999999999999999999999999999967777777777776..
        ..633777777773366999999999999999999999999999999996633777777773366.
        .6733776666773376999999999999999999999999999999996733776666773376.
        .677776dddd67777699999966666999999999996666699999677776dddd677776.
        .6d666dddddd666d69999966...6699999999966...6699996d666dddddd666d6.
        .6dddddddddddddd6999666.....66699999666.....666996dddddddddddddd6.
        ..6dddddddddddd666666.........6666666.........66666dddddddddddd6..
        ...666666666666....................................666666666666...
        ..................................................................
        `)
    price = randint(5, 2500)
    choice = game.askForString("Buy this item for $" + price + "?")
    if (choice == "yes" && info.score() >= price) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(0 - price)
        choice = game.askForString("What would you like to name this item?")
        Owned_Item = choice
        Owned_Item_Value = price
    } else if (choice == "yes" && info.score() < price) {
        game.showLongText("You don't have enough money!", DialogLayout.Bottom)
        choice = game.askForString("Would you like to go into debt?")
        if (choice == "yes") {
            sprites.destroy(otherSprite)
            info.changeScoreBy(0 - price)
            choice = game.askForString("What would you like to name this item?")
            Owned_Item = choice
            Owned_Item_Value = price
        } else {
            location = otherSprite.tilemapLocation()
            tiles.placeOnTile(sprite, tiles.getTileLocation(14, location.row))
        }
    } else {
        location = otherSprite.tilemapLocation()
        tiles.placeOnTile(sprite, tiles.getTileLocation(14, location.row))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Renew, function (sprite, otherSprite) {
    RenewChoice = game.askForString("Renew auction items for $" + "250" + "?")
    otherSprite.setFlag(SpriteFlag.Invisible, true)
    if (RenewChoice == "yes" && info.score() >= price) {
        for (let index = 0; index <= UsedAuction.length - 1; index++) {
            auctionItems.push(UsedAuction.pop())
        }
        for (let value of sprites.allOfKind(SpriteKind.item)) {
            value.setFlag(SpriteFlag.Invisible, true)
        }
        renewAuction()
    }
    pause(5000)
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    info.changeScoreBy(0 - 250)
})
function renewAuction () {
    rowNumber = 6
    for (let index = 0; index < 4; index++) {
        item2 = auctionItems.removeAt(randint(0, auctionItems.length - 1))
        UsedAuction.push(item2)
        item2.setKind(SpriteKind.item)
        tiles.placeOnTile(item2, tiles.getTileLocation(16, rowNumber))
        item2.y += -8
        item2.setFlag(SpriteFlag.Invisible, false)
        rowNumber += 4
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Owned_Item) {
        choice = game.askForString("Would you like to sell " + Owned_Item + "? It's value is " + Owned_Item_Value)
    }
    if (choice == "yes") {
        if (haggling(sprite, otherSprite)) {
            Owned_Item = null
        }
    } else {
        tiles.placeOnTile(sprite, tiles.getTileLocation(6, 6))
    }
})
let customer: Sprite = null
let item2: Sprite = null
let UsedAuction: Sprite[] = []
let RenewChoice = ""
let location: tiles.Location = null
let Owned_Item_Value = 0
let price = 0
let choice = ""
let customerPrice = 0
let sold = false
let itemPrice = 0
let numInt = 0
let interact = false
let rowNumber = 0
let auctionItems: Sprite[] = []
let Owned_Item = ""
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 180 
}
tiles.setCurrentTilemap(tilemap`level8`)
let table1 = sprites.create(img`
    ..cccccccccccccccccccccccccccc..
    .b3333333333333333333333333333..
    c333111111111111111111111111333c
    c331133333333333333333333331133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331133333333333333333333331133c
    c333111111111111111111111111333c
    cb3333333333333333333333333333bc
    cbb33333333333333333333333333bbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    c3bbbbbbbbbbbbbbbbbbbbbbbbbbbb3c
    c3bb333bbbb333bbbb333bbbb333bb3c
    .ccbcccb33bcccb33bcccb33bcccbcc.
    ..cccccccccccccccccccccccccccc..
    ..cbbc....................cbbc..
    ..c33c....................c33c..
    ...cc......................cc...
    `, SpriteKind.furniture)
table1.setScale(2, ScaleAnchor.Middle)
tiles.placeOnTile(table1, tiles.getTileLocation(16, 6))
let table2 = sprites.create(img`
    ..cccccccccccccccccccccccccccc..
    .b3333333333333333333333333333..
    c333111111111111111111111111333c
    c331133333333333333333333331133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331133333333333333333333331133c
    c333111111111111111111111111333c
    cb3333333333333333333333333333bc
    cbb33333333333333333333333333bbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    c3bbbbbbbbbbbbbbbbbbbbbbbbbbbb3c
    c3bb333bbbb333bbbb333bbbb333bb3c
    .ccbcccb33bcccb33bcccb33bcccbcc.
    ..cccccccccccccccccccccccccccc..
    ..cbbc....................cbbc..
    ..c33c....................c33c..
    ...cc......................cc...
    `, SpriteKind.furniture)
table2.setScale(2, ScaleAnchor.Middle)
tiles.placeOnTile(table2, tiles.getTileLocation(16, 10))
let table3 = sprites.create(img`
    ..cccccccccccccccccccccccccccc..
    .b3333333333333333333333333333..
    c333111111111111111111111111333c
    c331133333333333333333333331133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331133333333333333333333331133c
    c333111111111111111111111111333c
    cb3333333333333333333333333333bc
    cbb33333333333333333333333333bbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    c3bbbbbbbbbbbbbbbbbbbbbbbbbbbb3c
    c3bb333bbbb333bbbb333bbbb333bb3c
    .ccbcccb33bcccb33bcccb33bcccbcc.
    ..cccccccccccccccccccccccccccc..
    ..cbbc....................cbbc..
    ..c33c....................c33c..
    ...cc......................cc...
    `, SpriteKind.furniture)
table3.setScale(2, ScaleAnchor.Middle)
tiles.placeOnTile(table3, tiles.getTileLocation(16, 14))
let table4 = sprites.create(img`
    ..cccccccccccccccccccccccccccc..
    .b3333333333333333333333333333..
    c333111111111111111111111111333c
    c331133333333333333333333331133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331333333333333333333333333133c
    c331133333333333333333333331133c
    c333111111111111111111111111333c
    cb3333333333333333333333333333bc
    cbb33333333333333333333333333bbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    c3bbbbbbbbbbbbbbbbbbbbbbbbbbbb3c
    c3bb333bbbb333bbbb333bbbb333bb3c
    .ccbcccb33bcccb33bcccb33bcccbcc.
    ..cccccccccccccccccccccccccccc..
    ..cbbc....................cbbc..
    ..c33c....................c33c..
    ...cc......................cc...
    `, SpriteKind.furniture)
table4.setScale(2, ScaleAnchor.Middle)
tiles.placeOnTile(table4, tiles.getTileLocation(16, 18))
let mySprite2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite2.setScale(2, ScaleAnchor.Middle)
controller.moveSprite(mySprite2)
info.setScore(1000000)
scene.cameraFollowSprite(mySprite2)
// testings
auctionItems = [
sprites.create(img`
    ..........bbbbbb................
    .......bbb444444bb..............
    .....2244444ddd444b.............
    ....244444444dddd44e............
    ...244444444444ddd4be...........
    ..244444444444444d44be..........
    .2b444444444444444d4be..........
    .2b44444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bb4b4444444444444444bbe........
    2bb4444444444444444444be........
    2bb44444444444444444444e........
    2bbb444bbb4444444444444e........
    22bbb444bb4bb444444444be........
    .2bbbbb44bbbb44444444bbe........
    .22bbbbbbbb44bbb444444bbe.......
    ..eeebbbbbbb44bbb444444be.......
    ...eeeeebbbbbbbb44b4444be.......
    .....eeeeee222bb44bbb4bbe.......
    .......eeeee222bb44bbbbee.......
    ............e222bbbbbbbec.......
    ..............ee2bbbbeebdb......
    .................eeeeecdddb.....
    .......................cd11bbbb.
    ........................cd111dbb
    .........................b11111c
    .........................c11dd1c
    .........................cd1dbc.
    .........................cb11c..
    ..........................ccc...
    ................................
    `, SpriteKind.furniture),
sprites.create(img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `, SpriteKind.furniture),
sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.furniture),
sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.furniture),
sprites.create(img`
    .............beebbbb............
    ............eebbbb4bb...........
    ............eb344bb4bb..........
    ............e44334bb4bb.........
    ............eb433344b4be........
    ............4eb43344444be.......
    ...........bd4eb43333344bb......
    ..........b455d4443333444bb.....
    ..........4d5555d444333444bb....
    .........4555555dd4b4443444be...
    ........bd5555d555d4bb444444ee..
    ........b55ddd665555bb4b44444ee.
    .......bd5555677655554ebb44444eb
    .......43222558855555d4eeb44b4ee
    ......b422332ddd555222d4eebbb4be
    ......be22232ed55522332db4ebbbbe
    .....bde22222e555e22232edd4bbbbe
    .....b52e222e3555e22222eddd4ebee
    ....bd552eee355552e222e355544eee
    ....665dd5555555552eee355dd4deee
    ...6776555555555555555551554d4ee
    ...4885222555dddd6655551544d4eee
    ..b45522332555dd677611d444ddeee.
    ..4d5222232e55555881d44ddd4eee..
    .bdd5e22222e555115114d54d4ee....
    .b55d2e222e351144d1d55eeee......
    bd5ddd2eee3d444555dd4e..........
    b555115dddd55d544eede...........
    4511d444d5544ee...4de...........
    41d4555d4ee........44...........
    41554eede.......................
    44ee...4e.......................
    `, SpriteKind.furniture),
sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.furniture),
sprites.create(img`
    .....6feeeeeeeeeef6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6667776...
    ..6776ee67777777667776..
    ...668ee7768867788666...
    ......ee77eeee67ee......
    ......ee6eeeeee6ce......
    ......eefeeeeeeece......
    ......eeceeeeeeece......
    ......eeceeeeeeefe......
    ......eeceeeeeeefe......
    ......eeeeeeeeeefe......
    ......eeeeeeeeeece......
    .....6eeeeeeeeeece6.....
    ....6776eeeeeeeee676....
    ...6776666eeee6766776...
    ..6776ee77777777667776..
    ...668ce7768867788666...
    ......ce77eeee67ee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......beeeeeeeeeeb......
    .......beeeeeeeeb.......
    ........beeeeeeb........
    ........................
    ........................
    ........................
    `, SpriteKind.furniture),
sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.furniture)
]
rowNumber = 6
for (let item22 of auctionItems) {
    item22.setFlag(SpriteFlag.Invisible, true)
}
renewAuction()
let mySprite = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Renew)
tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 12))
let numCustomers = 0
game.onUpdateInterval(5000, function () {
    if (numCustomers < 6) {
        customer = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Enemy)
        customer.setScale(2, ScaleAnchor.Middle)
        tiles.placeOnTile(customer, tiles.getTileLocation(randint(0, 10), randint(7, 15)))
        numCustomers += 1
    }
})
