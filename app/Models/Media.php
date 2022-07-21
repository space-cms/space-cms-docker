<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Media extends Model
{
  use HasFactory, Searchable;

  protected $fillable = ['name'];

  public function space()
  {
    return $this->belongsTo(Space::class);
  }
}
