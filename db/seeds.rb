# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hikes = Hike.create(
  [
    {
      title: 'Pyramid Peak',
      overview: "Located in the Maroon Bells Wilderness with access from Aspen, restrictions in this area vary year-round. Due to overly curious bears, camping at the upper Crater Lake is often off limits, even with a bear can. There is a pay-to-park ranger station on the way up the road, with a self-serve station if you drive up at strange hours. Dogs cannot hike Pyramid Peak. It is technical enough to be regarded as a climb more than a hike, and a helmet is required for the upper 1000 ft.",
      image:"https://cdn-files.apstatic.com/hike/7007432_medium_1443397478.jpg",
      length: 7.9,
      ascent: "4,393'",
      descent: "-4,393'",
      ratings: 5.0,
      difficulty: "Difficult",
      comments: []
    },
    {
      title: 'Cathedral Lake Trail',
      overview: "The route offers great views of a high alpine lake surrounded by towering peaks in the Elk Range. Expect a gradual climb the entire way to Cathedral Lake with some rocky sections. During the fall, this route is a great way to view the yellow aspens, but is also very crowded.",
      image:"https://cdn-files.apstatic.com/hike/7024409_medium_1477348843.jpg",
      length: 7.9,
      ascent: "11,897'",
      descent: "-9,992'",
      ratings: 4.6,
      difficulty: "Intermediate",
      comments: []
    },
    {
      title: 'Mt. Crested Butte',
      overview: "This is an iconic Crested Butte hike featuring some of the area's highlights:
                  Wildflowers,Aspens,Stunning viewpoints,...and chairlifts. If you're in town and are looking to get out and hike, be sure to put this on the list.",
      image:"https://cdn-files.apstatic.com/hike/7007261_medium_1442523150.jpg",
      length: 7.9,
      ascent: "12,073'",
      descent: "-9,392'",
      ratings: 4.7,
      difficulty: "Intermediate/Difficult",
      comments: []
    }
  ]
)
