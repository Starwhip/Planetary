const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height
let map = []
let map_radius = 5
for (let q = -map_radius; q <= map_radius; q++) {
    let r1 = Math.max(-map_radius, -q - map_radius);
    let r2 = Math.min(map_radius, -q + map_radius);
    for (let r = r1; r <= r2; r++) {
        map.push(new Hex(q, r, -q - r));
    }
}
//console.log(map)
let layout = new Layout(Layout.pointy, new Point(20, 20), new Point(canvas.width / 2, canvas.height / 2))

for (let i = 0; i < map.length; i++) {
    let points = layout.polygonCorners(map[i])
        //console.log(points)
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    for (let k = 1; k < points.length; k++) {
        ctx.lineTo(points[k].x, points[k].y)
    }
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 1
    ctx.closePath()
    ctx.stroke()
}