const Jimp = require("jimp")

const images = ["./images/container.png", "./images/photo1.jpeg", "./images/download.jpeg"]

const jimps = []

for (let i = 0; i < images.length; i++) {
    jimps.push(Jimp.read(images[i]))
}

async function someFunc(someJimps) {
    const data = await Promise.all(someJimps)

    if (!data) {
        console.log("Error:", error)
        throw new Exception()
    }

    let maxHeight = 0

    for (let image of data) {
        if (image.getHeight() > maxHeight) {
            maxHeight = image.getHeight()
        }
    }

    data[0].resize(data[1].getWidth() + data[2].getWidth(), maxHeight)

    data[0].composite(data[1], 0, 0)
    data[0].composite(data[2], data[1].getWidth(), 0)

    data[0].write("test.png", () => {
        console.log("Done")
    })
}

someFunc(jimps)
