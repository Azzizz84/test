<?php

use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Api\PaymentController;
use App\Models\Banner;
use App\Models\Market;
use App\Models\Order;
use App\Models\ServiceOrder;
use App\Models\ServiceProvider;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AppServiceOrderController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\CommentController;
use App\Http\Controllers\Admin\ContactUsController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\MarketController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\ServiceOrderController;
use App\Http\Controllers\Admin\ServiceProviderController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
     return view('welcome'); 
   // return redirect('https://market.amaraapp.com.sa/');
});




Route::get('terms',[SettingController::class,'terms'])->name('terms_link');
Route::get('privacy',[SettingController::class,'privacy'])->name('privacy_link');
Route::get('about',[SettingController::class,'about'])->name('about_link');
Route::get('return',[SettingController::class,'return'])->name('return_link');

Route::middleware('auth_api')->group(function () {
    Route::get('/payment/{id}/{type}', [PaymentController::class, 'payment'])->name('moyasar.payment');
    Route::get('/paymentServices/{id}/{type}', [PaymentController::class, 'paymentServices'])->name('moyasar.payment');
    Route::get('/moyasar/callback/{total}/{user_id}/{type}', [PaymentController::class, 'handleCallback'])->name('moyasar.callback');
});
