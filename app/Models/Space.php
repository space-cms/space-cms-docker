<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Space extends Model
{
  use HasFactory;

  protected $fillable = ['name'];

  public function organization()
  {
    return $this->belongsTo(Organization::class);
  }

  public function medias()
  {
    return $this->hasMany(Media::class);
  }
}
