---
order: 8
metaTitle: Custom action hooks
metaDesc: Developer reference for Interactive Real Estate hooks including irep_flat_saved, irep_reservation_created, irep_flat_mapped, and flat AJAX action endpoints.
---

# Custom Hooks Reference

### [`irep_flat_saved`](#irep_flat_saved)

---

Triggered after a flat is created or updated.

```php
do_action(
    'irep_flat_saved',
    $flat_id,
    $project_id,
    $old_price,
    $new_price,
    $request_price
);
```

**Arguments**

1. **flat_id** (`int`) - Flat ID.
2. **project_id** (`int`) - Parent project ID.
3. **old_price** (`float`) - Previous price (`0.0` on create).
4. **new_price** (`float`) - New/current flat price.
5. **request_price** (`bool`) - Whether the flat is marked as "request price".

**Example usage**

```php
add_action('irep_flat_saved', function ($flat_id, $project_id, $old_price, $new_price, $request_price) {
    // Log price changes or sync with CRM.
    if ($old_price !== $new_price) {
        error_log("Flat {$flat_id} in project {$project_id} changed from {$old_price} to {$new_price}");
    }
}, 10, 5);
```

### [`irep_reservation_created`](#irep_reservation_created)

---

Fires after a reservation row is successfully created in the database. Typically when a visitor submits the **request callback** form for a flat.

![Request callback form](/assets/plugin/requestCallback.webp)

```php
do_action(
    'irep_reservation_created',
    $reservation_id,
    $created_reservation,
    $project_id,
    $flat_id
);
```

**Arguments**

1. **reservation_id** (`int`) - New reservation primary key.
2. **created_reservation** (`object|null`) - The created row; `flat_id` and `project_id` are set on this object for consumers.
3. **project_id** (`int`) - Project the reservation belongs to.
4. **flat_id** (`int`) - Flat the reservation is for.

**Example usage**

```php
add_action('irep_reservation_created', function ($reservation_id, $created_reservation, $project_id, $flat_id) {
    // Send to CRM, analytics, or custom email.
    if ($created_reservation) {
        error_log("Reservation {$reservation_id} for flat {$flat_id} in project {$project_id}");
    }
}, 10, 4);
```

## Custom Filter Hooks

### [`irep_flat_mapped`](#irep_flat_mapped)

---

Applied inside `map_flats()` before returning a transformed flat.

```php
$flat = apply_filters('irep_flat_mapped', $item);
```

**Arguments**

1. **item** (`array`) - Mapped flat data array.

**Example usage**

```php
add_filter('irep_flat_mapped', function ($flat) {
    $flat['custom_badge'] = !empty($flat['offer_price']) ? 'Special Offer' : '';
    return $flat;
});
```
