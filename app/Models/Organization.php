<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
  use HasFactory;

  public $fillable = ['name'];

  /**
   * Get the spaces for the organization.
   */
  public function spaces()
  {
    return $this->hasMany(Space::class);
  }

  public function memberships()
  {
    return $this->belongsToMany(Membership::class);
  }
}
