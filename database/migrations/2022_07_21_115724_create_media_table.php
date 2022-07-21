<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('media', function (Blueprint $table) {
      $table->id();
      $table->timestamps();

      $table->string('name');
      $table->foreignId('space_id')->constrained('spaces');
      $table->foreignId('last_udpdate_by_user_id')->constrained('users');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('media');
  }
};
