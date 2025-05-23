<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('service_providers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('lang', ['ar', 'en'])->default('ar');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->string('image')->nullable();
            $table->string('password');
            $table->double('wallet', 8, 2)->default(0);
            $table->boolean('block')->default(false);
            $table->boolean('online')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_providers');
    }
};
