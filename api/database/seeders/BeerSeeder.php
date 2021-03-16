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
                "name" => "India Pale Ale",
                "image" => "images/beer.jpg",
                "category" => "rubia",
                "alcohol" => "4%",
                "country" => "India",
                "color" => "Blonde",
                "price" => 3.00,
                "description" => "Cerveza pálida india. Es una cerveza lupulada, de alta fermentación, que posee un amargor tolerable y sabor a especias, con rastros florales y cítricos.",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            1 => [
                "name" => "American Amber Lager",
                "image" => "images/beer.jpg",
                "category" => "craft",
                "alcohol" => "6%",
                "country" => "Germany",
                "color" => "Red",
                "price" => 3.10,
                "description" => "A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character. Hop bitterness can range from very low to medium-high. Brewers may use decoction mash and dry-hopping to achieve advanced flavors.",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            2 => [
                "name" => "American Black Ale",
                "image" => "images/beer.jpg",
                "category" => "craft",
                "alcohol" => "7.5%",
                "country" => "Austria",
                "color" => "Black",
                "price" => 3.20,
                "description" => "The American black ale is characterized by the perception of caramel malt and dark roasted malt flavor and aroma. Hop bitterness is perceived to be medium-high to high. Hop flavor and aroma are medium-high. Fruity, citrus, piney, floral and herbal character from hops of all origins may contribute to the overall experience. This beer is often called a black IPA or Cascadian dark ale.",
                "created_at" => now(),
                "updated_at" => now(),
            ],
        ];
        Beer::truncate();
        $faker = \Faker\Factory::create();
        foreach($beers as $beer){
            Beer::create($beer);
        }
    }
}
