<?php

namespace App\Http\Requests\Api\Category;

use App\Http\Requests\BaseRequest;

class GetSubCategoryRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id'=>'required|numeric|exists:categories',
        ];
    }
    public function messages()
    {
        return [
            'id.required' => __('validation.category_id'),
            'id.numeric' => __('validation.numeric'),
            'id.exists' => __('validation.category_exists'),
        ];
    }
}
