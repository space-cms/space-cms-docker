<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
  use RefreshDatabase;

  /**
   * A basic feature test example.
   *
   * @return void
   */
  public function test_unknown_route()
  {
    $response = $this->get('/');
    $response->assertStatus(404);
  }

  public function test_bad_method_request()
  {
    $response = $this->get('/api/auth');
    $response->assertStatus(405);
  }

  public function test_good_method_bad_body_request()
  {
    $response = $this->post('/api/auth', []);
    $response->assertStatus(302);
  }

  public function test_good_method_missing_body_props_request()
  {
    $response = $this->post('/api/auth', ['email' => 'test@spacecms.com']);
    $this->assertDatabaseMissing('users', [
      'email' => 'test@spacecms.com',
    ]);
    $response->assertStatus(302);
  }

  public function test_good_method_good_body()
  {
    $response = $this->post('/api/auth', ['email' => 'test@spacecms.com', 'password' => 'letsgo']);
    $this->assertDatabaseHas('users', [
      'email' => 'test@spacecms.com',
    ]);
    $response->assertStatus(200);
  }
}
