<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Beer;

class BeerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $beers = [
            0 => [
                "name"        => "Trappist Tripel",
                "brand"       => "Westmalle",
                "image"       => "images/beer_1.jpg",
                "category"    => "Yellow",
                "alcohol"     => "9.5%",
                "country"     => "Belgium",
                "color"       => "Golden",
                "price"       => 3.00,
                "description" => "Its deeply golden-yellow colour brings to mind the vivacity of autumn colours. If this beer is poured at a low temperature, a cold cloudy mist may be seen shimmering in the glass. All of this is topped off with a luxurious, but delicate, collar of creamy froth – the not-quite-white jewel in the crown.This Triple lures you in with its sweet banana aromas, but then provides a hoppy bitterness as a background to the aroma symphony. Its malty body is enriched with yeasty alcohol esters and hop flowers. The character is predominantly herbal and earthy but, it is enlivened by CO2 pearls, ensuring a lively character overall.",
                "created_at"  => now(),
                "updated_at"  => now(),
            ],
            1 => [
                "name"        => "London Pride",
                "brand"       => "Fuller’s",
                "image"       => "images/beer_3.jpg",
                "category"    => "Red",
                "alcohol"     => "4.7%",
                "country"     => "England",
                "color"       => "Ale",
                "price"       => 3.00,
                "description" => "London Pride is a very famous premium ale. It has a good malty base with an excellent blend of hop character, resulting in an easy-drinking beer with great body and a fruity, satisfying finish.",
                "created_at"  => now(),
                "updated_at"  => now(),
            ],
            2 => [
                "name"        => "Nut Brown Ale",
                "brand"       => "Sam Smith’s",
                "image"       => "images/beer_5.jpg",
                "category"    => "Black",
                "alcohol"     => "5.2%",
                "country"     => "England",
                "color"       => "Brown Ale",
                "price"       => 3.00,
                "description" => "This beer really earns its name of nut brown ale with flavors of almond and walnut. Even though you’ll swear you’re drinking liquid almond butter, the only ingredients in this signature English ale are water, malted barley, yeast, cane sugar and hops.",
                "created_at"  => now(),
                "updated_at"  => now(),
            ],
            3 => [
                "name"        => "Flanders Red",
                "brand"       => "Rodenbach",
                "image"       => "images/beer_4.jpg",
                "category"    => "Red",
                "alcohol"     => "5.2%",
                "country"     => "Belgium",
                "color"       => "Red-brown",
                "price"       => 3.00,
                "description" => "A signature beer of Belgium, Rodenbach classic appears dark but it’s surprisingly light and fruity on the palate. Its sweet-sour taste is a bit like wine, though more on the tart side, and it comes from maturing in massive oak barrels called 'fouders.'",
                "created_at"  => now(),
                "updated_at"  => now(),
            ],
            4 => [
                "name" => "Best Extra Stout",
                "brand" => "Coopers",
                "image" => "images/beer_6.jpg",
                "category" => "Black",
                "alcohol" => "6.3%",
                "country" => "Australia",
                "color" => "Scout",
                "price" => 3.20,
                "description" => "Now here's a beer with punch. Coopers Best Extra Stout is a beacon for lovers of a hearty brew. With its robust blend of fruit and chocolate flavours and bitter hop notes, it's everything a stout should be. An all malt brew that's naturally conditioned in the bottle, Coopers Best Extra Stout's unique rich, dark texture comes from our liberal use of specially roasted black malt. No additives. No preservatives.",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            5 => [
                "name"        => "Hefe Weissbeer",
                "brand"       => "Weihenstephaner",
                "image"       => "images/beer_2.jpg",
                "category"    => "Yellow",
                "alcohol"     => "5.4%",
                "country"     => "Germany",
                "color"       => "Trigo",
                "price"       => 3.00,
                "description" => "German wheat beers are known for being summer sippers. Their light color, zippy carbonation and spicy aroma have inspired copycat versions around the world but Weihenstephaner Hefe Weissbier is one of the originals, still widely enjoyed in Germany.",
                "created_at"  => now(),
                "updated_at"  => now(),
            ],
        ];
        Beer::truncate();
        $faker = \Faker\Factory::create();
        foreach($beers as $beer){
            Beer::create($beer);
        }
    }
}
