<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class SpaceModel extends Model
{
  use HasFactory, Searchable;

  protected $fillable = [
    'name',
  ];

  /**
   * Get the value used to index the model.
   *
   * @return mixed
   */
  public function getScoutKey()
  {
    return $this->name;
  }

  /**
   * Get the key name used to index the model.
   *
   * @return mixed
   */
  public function getScoutKeyName()
  {
    return 'name';
  }

  /**
   * Get the name of the index associated with the model.
   *
   * @return string
   */
  public function searchableAs()
  {
    return 'models_index';
  }
}
