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
        Schema::create('service_order_offers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_provider_id')->constrained()->onDelete('cascade');
            $table->foreignId('service_order_id')->constrained()->onDelete('cascade');
            $table->timestamp('time')->nullable();
            $table->text('description')->nullable();
            $table->double('price', )->default(0);
            $table->double('deposit',)->nullable();
            $table->enum('status', ['progress', 'accepted', 'refused', 'closed'])->default('progress');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_order_offers');
    }
};
